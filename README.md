# Voca Protos
Voca Protos contains the Protobuf files for our services.
Together, these `.proto` files allow us to generate stubs for both node and ruby, to have a unified interface between our services.

## Repo Structure

```
├── Dockerfile             
├── README.md                     # This file
├── bin                           # scripts
|  └── compile                    # Compilation script
├── clients                       # Distribution dir
|  ├── VERSION                    # Compilation time
|  ├── decidim                    # Stubs 
|  ├── decidim-node-client.tar.gz #
|  └── decidim-ruby-client.tar.gz #
|  └── decidim-ruby-server.tar.gz #
├── decidim                       # Decidim prototypes
|  └── Settings.proto             # 
└── sync                          # Docker scripts
```

## Download the stubs

* Voca Decidim
  * [protos](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-protos.tar.gz)
  * [ruby server](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-ruby-server.tar.gz)
  * [ruby client](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-ruby-client.tar.gz)
  * [node client](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-node-client.tar.gz)
* Voca System
  * [protos](https://github.com/octree-gva/voca-protos/raw/main/clients/system-protos.tar.gz)
  * [ruby client](https://github.com/octree-gva/voca-protos/raw/main/clients/system-ruby-client.tar.gz)


##  Compile the protos

```
./sync
```

