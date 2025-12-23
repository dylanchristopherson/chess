# Attempt at chess!

### Local testing

Firefox is not capable of handling php files. Thus, a php server is needed - https://stackoverflow.com/a/24777896

Install php on zorin (which is based on Ubuntu)
```
sudo apt install php libapache2-mod-php
```

Spin up the local server

```
php -S localhost:8000 
```

Navigate to
```
http://localhost:8000/index.php
```