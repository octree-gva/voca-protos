ARG ALPINE_RUBY_VERSION=2.7.3
FROM quay.io/evl.ms/fullstaq-ruby:${ALPINE_RUBY_VERSION}-malloctrim-slim  as build-ruby
RUN gem update --system --no-document --silent
RUN gem install grpc  --no-document --silent --version "1.48.0" \
  && gem install grpc-tools --no-document --silent --version "1.48.0" 
WORKDIR /home/protos
COPY . /home/protos
RUN chmod +x /home/protos/bin/compile \
  && ln -s $(which ruby) /usr/local/bin/ruby
RUN /home/protos/bin/compile

FROM alpine
COPY --from=build-ruby /home/protos/clients /home/protos/clients