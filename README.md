# projetia-front


## Pour passer en prod, il faut changer l'url dans src/js/index.js:

```

var url = "http://localhost:8000/mock.php?q="

```

# /!\ Le serveur doit contenir les headers CORS: 

```
<?php
header("Access-Control-Allow-Origin: *");
header("content-type: application/json");
?>

```

# API usage

Le client envoi qu'un seul variable: $_GET['q']

réponse attendu: une liste de tweets avec le champ 'sentiment' ajouté'

exemple: [{text:'afelkej',sentiment:5}]

se réferer à la fichier mock.json.