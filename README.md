# OpenFaas Node.JS 12 function examples

## Prerequisite
It is assumed that you already have OpenFaas installed and you're logged in with faas-cli

## Clone the repo
```sh
git clone https://github.com/utsavanand2/faasnode12.git
```

## Pull the NodeJS v12 template
```sh
cd openfaasfn
faas-cli template pull https://github.com/openfaas/templates
```

## List out the available templates from the pull
```sh
faas-cli new --list
```

## Create a new OpenFaas function using
```sh
faas-cli new <YOUR_FUNC_NAME> --lang node12 --append ./stack.yml
```

## Build and deploy your newly created function
Note: Make sure you prefix the **image** fileld in the function property with the appropriate tag for pushing to a repo
```sh
faas-cli up -f ./stack.yml
```
