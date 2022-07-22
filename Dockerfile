ARG ALPINE_RUBY_VERSION=2.7.3
ARG RUBY_VERSION=${ALPINE_RUBY_VERSION}-jemalloc
FROM quay.io/evl.ms/fullstaq-ruby:${RUBY_VERSION}-slim  as build-ruby
RUN gem update --system --no-document --silent
RUN gem install grpc grpc-tools --no-document --silent
WORKDIR /home/protos
COPY . /home/protos
RUN chmod +x /home/protos/bin/compile \
  && ln -s $(which ruby) /usr/local/bin/ruby
RUN /home/protos/bin/compile

# FROM alpine
# COPY --from=build-ruby /home/protos/clients /home/protos/clients