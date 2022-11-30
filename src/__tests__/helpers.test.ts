import { CheckTerraSignature, DateToTerraDate } from "../API/Helpers";

it("Valid signature", () => {
  const payload =
    '{"user": {"last_webhook_update": null, "provider": "FITBIT", "user_id": "d81ea08d-ad4d-44bd-8394-ee4b68a3f96f", "scopes": null}, "type": "deauth", "status": "success", "message": "User has deauthenticated", "version": "2022-03-16"}';
  const terraSignature =
    "t=1669742999,v1=c885ce58891b69ab5b6c8fc7536544f4f515f2e22ec811152849295b3d995c93";
  const secret = "66142e0c2960f788b19830807d4aa25cfd27a610ec65fd36";
  expect(CheckTerraSignature(terraSignature, payload, secret)).toBe(true);
});

it("Invalid signature", () => {
  const payload =
    '{"status": "success", "user": {"scopes": null, "last_webhook_update": null, "provider": null, "user_id": "26fd4019-5e74-4087-9433-c728938f194d"}, "type": "deauth", "message": "User has deauthenticated", "version": "2022-03-16"}';
  const terraSignature =
    "t=1669743290,v1=27107029cb01871b164fc70b2065aee1fb4f6008b76c77888825b512fbdc7de1";
  const secret = "66142e0c2960f788b19830807d4aa25cfd27a610ec65fd36";
  expect(CheckTerraSignature(terraSignature, payload, secret)).toBe(false);
});

it("Correct date conversions", () => {
  expect(DateToTerraDate(new Date("2022-11-29T15:32:54.516729+00:00"))).toBe(
    "2022-11-29"
  );
  expect(DateToTerraDate(new Date(1641054516000))).toBe("2022-01-01");
});
