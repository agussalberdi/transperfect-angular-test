import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if no issues given', () => {
    const issues = null;

    const filtered = pipe.transform(issues, 'issue');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return issues if no value is given', () => {
    const issues = [];
    issues.push({ id: 1, number: 31100, title: 'First issue', user: {login: 'User 1'} });

    const filtered = pipe.transform(issues, null);

    expect(filtered).toEqual(issues);
  });

  it('should filter correctly', () => {
    const issues = [];

    issues.push({ id: 1, number: 31100, title: 'First issue', user: {login: 'User 1'} });
    issues.push({ id: 2, number: 31101,  title: 'Second issue', user: {login: 'User 2'} });
    issues.push({ id: 3, number: 31102,  title: 'Third issue', user: {login: 'User 3'} });
    issues.push({ id: 4, number: 31103,  title: 'Four issue', user: {login: 'User 4'} });

    const filtered = pipe.transform(issues, 'First issue');

    expect(filtered.length).toBe(1);
  });

});
