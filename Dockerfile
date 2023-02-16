FROM golang:1.20 as build

RUN mkdir -p /app
RUN apt-get update

WORKDIR /app

COPY ./ ./

RUN go build -v -ldflags="-X 'main.version=v1.0.0'" chaos.go

FROM ubuntu:22.04

RUN apt-get update

RUN mkdir -p /app/configs
RUN mkdir -p /app/var/logs

WORKDIR /app

COPY --from=build /app/chaos /app/chaos
COPY --from=build /app/config.dist.yml /app/configs/config.dist.yml

EXPOSE 8000

VOLUME /app/configs
VOLUME /app/var

RUN ./chaos version

CMD ["./chaos", "server", "-c", "/app/configs/config.dist.yml"]
