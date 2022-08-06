FROM node:14

WORKDIR /opt/
COPY ./package.json ./package-lock.json /opt/
ENV PATH /opt/node_modules/.bin:$PATH
RUN apt-get -y update && \
    apt-get -y install gcc g++ build-essential && \
    wget https://github.com/libvips/libvips/releases/download/v8.13.0/vips-8.13.0.tar.gz && \
    tar xzvf vips-8.13.0.tar.gz && \
    cd vips-8.13.0/ && ./configure --with-modules && make -j8 && make install && rm -rf vips-8.13.0/ && \
    ldconfig && \
    npm i && \
    apt-get -y remove gcc g++ build-essential

USER node
WORKDIR /home/node/devfolio
COPY --chown=node:node . .
RUN ln -s /opt/node_modules node_modules

CMD ["gatsby", "develop", "-H", "0.0.0.0"]

EXPOSE 8000

# FROM node:alpine
#
# COPY package.json /home/node
#
# RUN apk update && \
#     apk --no-cache --virtual .build-deps add python3 make gcc g++ gcompat binutils && \
#     apk --no-cache --virtual .build-deps add vips-dev --repository https://dl-3.alpinelinux.org/alpine/edge/testing/ && \
#     cd /home/node && npm i && \
#     apk del .build-deps
#
# USER node
# WORKDIR /home/node
