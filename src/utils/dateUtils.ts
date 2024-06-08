// utils/dateUtils.ts
export const getCurrentDate = (): string => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day:"numeric",year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };
  