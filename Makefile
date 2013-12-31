REPORTER = list

test: test-bdd

test-bdd:
	@./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--ui bdd \
		-- spec/*.js

test-doc:
	@./node_modules/mocha/bin/mocha \
		--report $(REPORTER) \
		--ui bdd \

