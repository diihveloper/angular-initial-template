# Interceptors (Interceptadores)

Interceptors são classes que interceptam requisições HTTP e manipulam seus cabeçalhos e corpo.
Pode ser usado para autenticação, manipulação de erros, manipulação de cache, etc.

## Interceptors implementados

- api-interceptor.ts - Intercepta todas as requisições HTTP e adiciona a url base da api a requisição caso a url não seja
absoluta.
- auth-interceptor.ts - Intercepta todas as requisições HTTP e adiciona o token de autenticação a requisição caso o
usuário esteja autenticado.
