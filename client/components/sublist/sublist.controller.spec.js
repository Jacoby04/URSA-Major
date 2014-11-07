/**
 * Created by moody107 on 11/7/14.
 * Automated testing for sublist
 */

describe('filter', function () {

    gsx$reviewgroup  = "Review Group 1"

    beforeEach(module('ursaMajorApp'));

    describe('isReviewer', function () {
        it('should check to see if the user is a reviewer', inject(function (isReviewer) {
            expect(isReviewer(gsx$reviewgroup)).toEqual(true);
        })
        )
    })
})