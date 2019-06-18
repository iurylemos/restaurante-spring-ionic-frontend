/*
 Neste arquivo eu vou definir configurações da minha API
 Vou expressar isso como um objeto JSON
 Isso aqui é muito importante pois quando eu for mudar o meu projeto
 para acessar a API lá em produção no HEROKU por exemplo
 basta eu modificar o endereço da baseURL
*/
export const API_CONFIG = {
    baseUrl: "http://localhost:8080",
    bucketBaseUrl: "https://restaurante-spring-ionic.s3-sa-east-1.amazonaws.com"
}