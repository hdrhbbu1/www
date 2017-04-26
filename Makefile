.PHONY: build package publish deploy

build:
	@npm run build

package:
	docker build -f Dockerfile \
		-t "us.gcr.io/thor-160721/nicholas-web`git rev-parse --short HEAD`" \
		-t "us.gcr.io/thor-160721/nicholas-web:latest" .

publish: build package
	gcloud docker -- push us.gcr.io/thor-160721/nicholas-web

deploy:
	deis builds:create us.gcr.io/thor-160721/nicholas-web:latest -a nicholas
