export function DateToTerraDate(d: Date): string {
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();

  return year + "-" + month + "-" + day;
}
