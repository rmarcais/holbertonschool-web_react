import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('Basic tests of utils functions', () => {
    it('Tests the getFullYear function', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });
    it('Tests the getFooterCopy function', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
        expect(getFooterCopy(true)).toBe('Holberton School');
    });
    it('Tests the getLatestNotification function', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
