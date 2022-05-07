export const colors = {
    primary: '#0d365a',
    green: '#04d167',
    lightGreen: "#20D167",
    lightGreen1: "#01D167",
    grey: '#dddddd',
    darkGrey: '#a7a7a7',
    darkGrey1: '#222222',
    darkgrey2: "#22222266",
    darkgrey3: "#22222233",
    lightGrey: '#eeeeee',
    white: '#FFFFFF',
    primaryLightBlue: '#26345f',
    lightGreen: '#effcf4',
    white: '#FFFFFF',
    darkBlue: "#25345F",
    greyBorder: "#0000001F"
}

export const strings = {
    tabs: {
      home: 'Home',
      debitCard: 'Debit Card',
      payments: 'Payments',
      credit: 'Credit',
      profile: 'Profile'
    },
    bottomTabs: 'Bottom Tabs',
    weeklyLimit: 'Weekly Limit',
    debitCard: {
      availableBalance: "Available balance",
      sDollar: "S$",
      hideCardNumber: "Hide card number",
      showCardNumber: "Show card number",
      thru: "Thru:",
      cvv: "CVV:",
      topupAccount: "Top-up account",
      topupDescription: "Deposit money to your account to use with card",
      weeklySpendingLimit: "Weekly spending limit",
      weeklySpendingDescription: "You haven’t set any spending limit on card",
      freezeCard: "Freeze card",
      freezCardDescription: "Your debit card is currently active",
      getNewCard: "Get a new card",
      getNewCardDescription: "This deactivates your current debit card",
      deactivatedCards: "Deactivated cards",
      deactivatedCardsDescription: "Your previously deactivated cards",
      cardSpendingLimit: "Debit card spending limit"
    },
    spendingLimit: {
      title: "Spending limit",
      secondryTitle: "Set a weekly debit card spending limit",
      inputDescription: "Here weekly means the last 7 days - not the calendar week"
    },
    aspire: "aspire",
    save: "Save"
  };

  export const actionTypes = {
      internetStatus: "INTERNET_STATUS", 
      loaderStatus: "LOADER_STATUS",
      internetStatus: "INTERNET_STATUS",
      setWeklyLimit: "SET_WEEKLY_LIMIT",
      getCardDetails: "GET_MY_CARD_DETAILS"
  }
  export const baseUrl = "https://carddetails.free.beeceptor.com";
  export const path = "/card"
  export const errors = {
    "code401": "Something went wrong! Please try again later.",
    "noInternet": "Seems Internet is down."
  } 
 