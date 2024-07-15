// Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев

type TotalPriceParams = {
  price: number;
  discount: number;
  isInstallment?: boolean;
  months: number;
};

export const price = {
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
};

export const totalPrice = ({
  price,
  discount,
  isInstallment = false,
  months = 0,
}: TotalPriceParams): number => {
  const discountedPrice = price - price * (discount / 100);

  return isInstallment && months > 0
    ? discountedPrice / months
    : discountedPrice;
};
