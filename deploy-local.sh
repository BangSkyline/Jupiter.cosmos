#!/bin/bash

# Script de déploiement local pour Cosmos avec Docker
# Usage: ./deploy-local.sh

set -e

echo "🚀 Déploiement local de Cosmos avec Docker"
echo "=========================================="

# Vérification que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérification que docker-compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Construction du projet React
echo "📦 Construction du projet React..."
if [ ! -d "dist" ]; then
    echo "⚠️  Le dossier 'dist' n'existe pas. Exécution de 'pnpm run build'..."
    pnpm run build
fi

# Arrêt des conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down 2>/dev/null || true

# Construction de l'image Docker
echo "🔨 Construction de l'image Docker..."
docker-compose build

# Démarrage du conteneur
echo "🚀 Démarrage du conteneur..."
docker-compose up -d

# Vérification du statut
echo "✅ Vérification du statut..."
sleep 3
if docker-compose ps | grep -q "Up"; then
    echo "✅ Conteneur démarré avec succès!"
    echo ""
    echo "🌐 Site accessible sur:"
    echo "   - http://localhost"
    echo "   - http://jupiter.cosmos (après configuration du fichier hosts)"
    echo ""
    echo "📋 Commandes utiles:"
    echo "   - Voir les logs: docker-compose logs -f"
    echo "   - Arrêter: docker-compose down"
    echo "   - Redémarrer: docker-compose restart"
    echo ""
    echo "⚙️  Pour configurer le nom de domaine jupiter.cosmos:"
    echo "   Ajoutez cette ligne à votre fichier /etc/hosts (Linux/Mac) ou C:\\Windows\\System32\\drivers\\etc\\hosts (Windows):"
    echo "   127.0.0.1    jupiter.cosmos"
else
    echo "❌ Erreur lors du démarrage du conteneur"
    docker-compose logs
    exit 1
fi

