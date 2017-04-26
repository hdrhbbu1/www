REV=`git rev-parse --short HEAD`
.PHONY: build package publish deploy

build:
	@npm run build

package:
	docker build -f Dockerfile \
		-t "us.gcr.io/thor-160721/nicholaswyoung:$(REV)" \
		-t "us.gcr.io/thor-160721/nicholaswyoung:latest" .

publish: build package
	gcloud docker -- push us.gcr.io/thor-160721/nicholaswyoung

deploy:
	deis builds:create us.gcr.io/thor-160721/nicholaswyoung:$(REV) -a nicholaswyoung
