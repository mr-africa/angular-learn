"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var events_service_1 = require("./events.service");
describe('EventsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [events_service_1.EventsService]
        });
    });
    it('should be created', testing_1.inject([events_service_1.EventsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=events.service.spec.js.map