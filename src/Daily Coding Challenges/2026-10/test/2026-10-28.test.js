import { describe, expect, it } from 'vitest';

import { navigate } from '../2026-10-28.js';

describe('navigate', () => {
  it('navigate(["Visit About Us", "Back", "Forward"]) should return "About Us"', () => {
    expect(navigate(['Visit About Us', 'Back', 'Forward'])).toEqual('About Us');
  });

  it('navigate(["Forward"]) should return "Home"', () => {
    expect(navigate(['Forward'])).toEqual('Home');
  });

  it('navigate(["Back"]) should return "Home"', () => {
    expect(navigate(['Back'])).toEqual('Home');
  });

  it('navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery"', () => {
    expect(navigate(['Visit About Us', 'Visit Gallery'])).toEqual('Gallery');
  });

  it('navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home"', () => {
    expect(
      navigate(['Visit About Us', 'Visit Gallery', 'Back', 'Back']),
    ).toEqual('Home');
  });

  it('navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact"', () => {
    expect(
      navigate([
        'Visit About',
        'Visit Gallery',
        'Back',
        'Visit Contact',
        'Forward',
      ]),
    ).toEqual('Contact');
  });

  it('navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us"', () => {
    expect(
      navigate([
        'Visit About Us',
        'Visit Visit Us',
        'Forward',
        'Visit Contact Us',
        'Back',
      ]),
    ).toEqual('Visit Us');
  });
});
