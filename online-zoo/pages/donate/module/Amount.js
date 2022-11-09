const amount = () => {
  const form = document.querySelector("#amount__counts");
  const amount = document.querySelector(".amount__input");
  const amounts = document.querySelectorAll(".amount__count-radio");

  form.addEventListener(
    "change",
    () => (amount.value = form.elements["amount__count"].value)
  );

  amount.addEventListener("input", () => {
    if (amount.value.length > 4) {
      amount.value = amount.value.slice(0, amount.maxLength);
    }

    for (const x of amounts) {
      if (amount.value === x.value) {
        form.elements["amount__count"].value = amount.value;
      }
    }
  });
};
export default amount;
