# Guide de Déploiement Docker - Cosmos

Ce guide vous explique comment déployer le site web Cosmos localement avec Docker et le nom de domaine `jupiter.cosmos`.

## Prérequis

- Docker installé sur votre machine
- Docker Compose installé
- Node.js et pnpm (pour la construction du projet)

## Structure des fichiers

```
cosmos-website/
├── Dockerfile              # Configuration Docker
├── docker-compose.yml      # Configuration Docker Compose
├── nginx.conf              # Configuration Nginx
├── deploy-local.sh         # Script de déploiement automatisé
├── .dockerignore           # Fichiers à ignorer lors du build Docker
├── dist/                   # Fichiers de build (générés par pnpm run build)
└── README-DEPLOYMENT.md    # Ce fichier
```

## Étapes de déploiement

### 1. Préparation du projet

```bash
# Cloner ou télécharger le projet cosmos-website
cd cosmos-website

# Installer les dépendances (si pas déjà fait)
pnpm install

# Construire le projet
pnpm run build
```

### 2. Déploiement avec le script automatisé

```bash
# Rendre le script exécutable
chmod +x deploy-local.sh

# Exécuter le déploiement
./deploy-local.sh
```

### 3. Déploiement manuel (alternative)

```bash
# Construction de l'image Docker
docker build -t cosmos-jupiter:latest .

# Démarrage avec Docker Compose
docker-compose up -d

# Ou démarrage direct avec Docker
docker run -d --name cosmos-jupiter -p 80:80 cosmos-jupiter:latest
```

## Configuration du nom de domaine jupiter.cosmos

### Sur Linux/Mac

Éditez le fichier `/etc/hosts` :

```bash
sudo nano /etc/hosts
```

Ajoutez cette ligne :

```
127.0.0.1    jupiter.cosmos
```

### Sur Windows

1. Ouvrez le Bloc-notes en tant qu'administrateur
2. Ouvrez le fichier `C:\Windows\System32\drivers\etc\hosts`
3. Ajoutez cette ligne :

```
127.0.0.1    jupiter.cosmos
```

## Accès au site

Une fois le conteneur démarré et le fichier hosts configuré :

- **Avec nom de domaine** : http://jupiter.cosmos
- **Avec localhost** : http://localhost
- **Avec IP** : http://127.0.0.1

## Commandes utiles

```bash
# Voir les conteneurs en cours d'exécution
docker ps

# Voir les logs du conteneur
docker-compose logs -f

# Arrêter le conteneur
docker-compose down

# Redémarrer le conteneur
docker-compose restart

# Reconstruire l'image
docker-compose build --no-cache

# Supprimer l'image
docker rmi cosmos-jupiter:latest
```

## Dépannage

### Le site ne se charge pas
- Vérifiez que le conteneur est en cours d'exécution : `docker ps`
- Vérifiez les logs : `docker-compose logs`
- Assurez-vous que le port 80 n'est pas utilisé par un autre service

### Le nom de domaine jupiter.cosmos ne fonctionne pas
- Vérifiez que la ligne a été ajoutée au fichier hosts
- Videz le cache DNS :
  - Linux/Mac : `sudo dscacheutil -flushcache`
  - Windows : `ipconfig /flushdns`

### Erreur de construction Docker
- Assurez-vous que le dossier `dist/` existe (exécutez `pnpm run build`)
- Vérifiez que Docker a suffisamment d'espace disque

## Configuration Nginx

Le fichier `nginx.conf` inclut :
- Configuration pour Single Page Application (SPA)
- Compression gzip
- Cache des fichiers statiques
- Headers de sécurité
- Support du nom de domaine `jupiter.cosmos`

## Sécurité

Le conteneur inclut des headers de sécurité basiques :
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Content-Security-Policy

Pour un environnement de production, considérez l'ajout de HTTPS et d'autres mesures de sécurité.

## Support

Si vous rencontrez des problèmes, vérifiez :
1. Les logs Docker : `docker-compose logs`
2. L'état des conteneurs : `docker ps -a`
3. L'utilisation des ports : `netstat -tulpn | grep :80`

