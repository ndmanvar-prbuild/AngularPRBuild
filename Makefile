setup:
	npm install

unit_tests:
	./node_modules/.bin/karma start karma.conf.js

functional_tests:
	./deploy_and_test.sh
