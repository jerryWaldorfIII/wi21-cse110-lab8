const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath tests', () => {

    test('volume level 3', () => {
        expect(formatVolumeIconPath(100)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('volume level 2', () => {
        expect(formatVolumeIconPath(47)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('volume level 1', () => {
        expect(formatVolumeIconPath(14)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('volume level 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });

});