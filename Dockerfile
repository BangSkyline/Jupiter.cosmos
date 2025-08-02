# Dockerfile corrigé
FROM nginx:alpine

# Copie les fichiers de build au bon endroit
COPY dist/ /usr/share/nginx/html/

# Copie la conf Nginx au bon endroit
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 85

CMD ["nginx", "-g", "daemon off;"]

