QUnit.module("startLoading", function(hooks) {
    hooks.beforeEach(function() {
        var fixture = document.getElementById('qunit-fixture');
        fixture.innerHTML = '<div class="statusWrapper"><label class="loading hideBlock" id="statusImg">We are getting data, please wait</label></div>';
    });
	
	QUnit.module('Test Modules startLoading', function() {
        QUnit.test('startLoading test 1', function(assert) {    
            startLoading();
            var clsname = document.getElementById('statusImg').className;
            assert.equal(clsname, 'loading');
        });
    });
});

