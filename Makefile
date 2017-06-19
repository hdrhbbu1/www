REV=`git rev-parse --short HEAD`
.PHONY: develop clean build package publish deploy

develop:
	@npm run develop

clean:
	@rm -fr public/

build: clean
	@npm run build

package:
	docker build --squash -f Dockerfile \
		-t "us.gcr.io/thor-160721/nicholaswyoung:$(REV)" \
		-t "us.gcr.io/thor-160721/nicholaswyoung:latest" .

publish:
	gcloud docker -- push us.gcr.io/thor-160721/nicholaswyoung

deploy: package publish
	deis builds:create us.gcr.io/thor-160721/nicholaswyoung:$(REV) -a nicholaswyoung
