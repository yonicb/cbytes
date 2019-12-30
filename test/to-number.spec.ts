import { toNumber } from '../lib/to-number';

/**
 * FROM: 1KB
 * TO: 1024
 */
test('format 1KB to 1024 ', () => {
    expect(toNumber('1KB')).toBe(1024);
});

/**
 * FROM: 4.5GB
 * TO: 4831838208
 */
test('format 4.5GB to 4831838208 ', () => {
    expect(toNumber('4.5GB')).toBe(4831838208);
});
