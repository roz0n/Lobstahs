import { extractDomain } from "../extractDomain";

describe("extractDomain tests", () => {
  const simpleUrl = "https://www.google.com";
  const complexUrl =
    "https://www.google.com/search?q=lobste.rs&source=hp&ei=raKcYbb7EdqMtAaKvaaoBA&iflsig=ALs-wAMAAAAAYZywvdyJYg4bnU86MDN9hNN4dBNI22wm&ved=0ahUKEwj2hYOKha70AhVaBs0KHYqeCUUQ4dUDCAk&uact=5&oq=lobste.rs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABAeMgQIABAeMgQIABAeOgsILhCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6DgguEIAEELEDEMcBENEDOhEILhCABBCxAxCDARDHARCjAjoLCC4QgAQQxwEQowI6CAgAEIAEELEDOgUILhCABDoICC4QgAQQsQM6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToLCAAQgAQQsQMQyQM6BQgAEJIDOggIABCABBDJAzoGCAAQChAeUABYtRZgqhdoBHAAeACAAYsBiAGWBpIBBDEwLjGYAQCgAQE&sclient=gws-wiz";
  const outputDomain = "google.com";

  it("should return the domain name of a simple url", () => {
    expect(extractDomain(simpleUrl)).toBe(outputDomain);
  });

  it("should return the domain name of a complex url", () => {
    expect(extractDomain(complexUrl)).toBe(outputDomain);
  });

  it("should return an empty string if an empty string is given", () => {
    expect(extractDomain("")).toBe("");
  });
});
