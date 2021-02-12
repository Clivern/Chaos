FROM golang:1.18 as build

RUN mkdir -p /app
RUN apt-get update

WORKDIR /app

COPY ./ ./

RUN go build -v -ldflags="-X 'main.version=v1.0.0'" gunner.go

FROM ubuntu:22.04

RUN apt-get update

RUN mkdir -p /app/configs
RUN mkdir -p /app/var/logs

WORKDIR /app

COPY --from=build /app/gunner /app/gunner
COPY --from=build /app/config.dist.yml /app/configs/config.dist.yml

EXPOSE 8000

VOLUME /app/configs
VOLUME /app/var

RUN ./gunner version

CMD ["./gunner", "server", "-c", "/app/configs/config.dist.yml"]
