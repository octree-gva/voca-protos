# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: decidim.proto for package 'voca_decidim'

require 'grpc'
require 'decidim_pb'

module VocaDecidim
  module Decidim
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'voca_decidim.Decidim'

      # region/Settings
      rpc :GetSettings, ::Google::Protobuf::Empty, ::VocaDecidim::GetSettingsResponse
      rpc :SetSettings, ::VocaDecidim::SetSettingsRequest, ::Google::Protobuf::Empty
      # region/Seed
      rpc :CompileAssets, ::Google::Protobuf::Empty, ::Google::Protobuf::Empty
      rpc :SetupDb, ::Google::Protobuf::Empty, ::Google::Protobuf::Empty
      rpc :SeedAdmin, ::VocaDecidim::SeedAdminRequest, ::VocaDecidim::SeedAdminResponse
    end

    Stub = Service.rpc_stub_class
  end
end
