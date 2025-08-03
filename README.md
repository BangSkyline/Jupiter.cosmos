# Jupiter.cosmos

# 🌌 Cosmos Website – Dockerized + Vault-HTTPS

> Déploiement local et sécurisé d'une SPA Vite avec Docker, NGINX, IP fixe, HTTPS via Vault.

---

## 📦 Stack technique

|----------|-------------|
| [Vite](https://vitejs.dev/) | Frontend rapide pour SPA |
| [Docker & Docker Desktop](https://www.docker.com/) | Conteneurisation |
| [NGINX](https://nginx.org/) | Serveur HTTP pour fichiers statiques |
| [Vault as a CA](https://developer.hashicorp.com/vault) | Génération de certificat HTTPS |
| [Portainer](https://www.portainer.io/) | UI de gestion Docker |
| `docker-compose` | Orchestration locale des conteneurs |

---

## 🚀 Lancer le projet en local

cd "/chemin/vers/le dossier"
pnpm install
pnpm run build
docker build -t cosmos-jupiter:latest .
docker-compose up -d

## 🌐 Configuration réseau

Le conteneur utilise le réseau Docker cosmos
IP statique : 192.168.95.30
Nom de domaine local (certificat généré par le secret engine pki (CA) de vault) : jupiter.cosmos
Port exposé : 85

## 🔐 Vault – TLS via PKI

Le certificat TLS est émis dynamiquement via un rôle Vault PKI local.

## ⚙️ Commandes utiles

-Build manuel de l'image
docker build -t cosmos-jupiter:latest .
-Démarrage avec docker-compose
docker-compose up -d
-Logs
docker-compose logs -f
-Arrêt
docker-compose down
