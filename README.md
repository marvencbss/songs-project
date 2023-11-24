## songs project
Projeto de desenvolvimento Back-end baseado em consultas SQL e Implementação em servidor local com auxílio do Javascript

### Acesso
- É necessário realizar a instalação da Database [indie.db](indie.db).
- Após isso, clona-se o repositório em seu editor de código de preferência.
- O funcionamento do servidor depende da sua iniciação por via do terminal do mesmo editor, com o comando **npm start**

  ## Consultas
  Para realizar as consultas, deve-se implementar ao link do servidor local:

- /indie
> **retorna Data inteira da database.**
- /indie/bands
> **retorna somente todas as bandas cujas constam no banco de dados.**
- /indie/albums
>  **retorna somente todos os albums cujos constam no banco de dados.**
- /indie/songs
> **retorna somente todas as músicas cujas constam no banco de dados.**
- /indie/band/:band
>  **retorna, se existente, uma banda requerida pelo usuário, juntamente com seus respectivos albums e músicas.**
- /indie/albums/:album
> **retorna, se existente, um album requerido pelo usuário, juntamente com seus respectivos artista e músicas.**
- /indie/songs/:song
>  **retorna, se existente, uma música requerida pelo usuário, juntamente com seus respectivos artistas e albums.**


  
