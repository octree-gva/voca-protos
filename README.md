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
|  ├── system/ruby                # Stubs 
|  ├── e2e/ruby                   # Stubs 
|  ├── decidim-node-client.tar.gz #
|  ├── decidim-protos.tar.gz      #
|  └── decidim-ruby-client.tar.gz #
├── decidim                       # Decidim prototypes
|  └── decidim.proto              # 
├── e2e                           # E2E prototypes
|  └── decidim_healthcheck.proto  # 
├── system                        # Strapi prototypes
|  └── strapi_events.proto        # 
└── sync                          # Docker scripts
```

## Download the stubs

* Voca Decidim
  * [protos](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-protos.tar.gz)
  * [ruby client](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-ruby-client.tar.gz)
  * [node client](https://github.com/octree-gva/voca-protos/raw/main/clients/decidim-node-client.tar.gz)
* Voca System
  * [protos](https://github.com/octree-gva/voca-protos/raw/main/clients/system-protos.tar.gz)
  * [ruby client](https://github.com/octree-gva/voca-protos/raw/main/clients/system-ruby-client.tar.gz)
* E2E
  * [protos](https://github.com/octree-gva/voca-protos/raw/main/clients/e2e-protos.tar.gz)
  * [ruby client](https://github.com/octree-gva/voca-protos/raw/main/clients/e2e-ruby-client.tar.gz)
<<<<<<< HEAD
=======

## Add a sync scripts (node)
To use prototypes in your node application, you will need to use **the .proto** files directly. 

You can add a script in your package.json this way: 

```json
"scripts": {
  "rpc": "curl https://raw.githubusercontent.com/octree-gva/voca-protos/main/clients/system-protos.tar.gz | tar -xz -C ./src/protos"
}
```

and run `yarn rpc` to have your Voca system prototypes. 
[More info on how to use grpc on node here](https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md#usage)
>>>>>>> main

## Add a sync script (node)
To use prototypes in your node application, you will need to use **the .proto** files directly. 

You can add a script in your package.json this way: 

```json
"scripts": {
  "rpc": "curl https://raw.githubusercontent.com/octree-gva/voca-protos/main/clients/system-protos.tar.gz | tar -xz -C ./src/protos"
}
```

and run `yarn rpc` to have your Voca system prototypes. 
[More info on how to use grpc on node here](https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md#usage)

## Add a sync script (ruby)
You can add a rake task to download and sync your ruby clients this way: 

```ruby
desc "Update protos for voca"
task :update_voca_proto do
  %x(curl https://raw.githubusercontent.com/octree-gva/voca-protos/main/clients/decidim-ruby-client.tar.gz | tar -xz -C ./lib/decidim/voca/grpc)
  puts "✅ /lib/decidim/voca/grpc udpated"
end
```

And then import your `_services_pb.rb` file normally

##  Compile the protos

```
./sync
```


