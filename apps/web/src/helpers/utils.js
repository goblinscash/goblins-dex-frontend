import { toast } from "react-toastify";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";

const PRECISION = 4;

export function truncateWalletAddress(address, isNotWalletAddress) {
  if (!address) return "";
  if (!isNotWalletAddress) {
    address = address.slice(0, 7) + "..." + address.slice(36);
  } else {
    address = address.slice(0, 8) + "..." + address.slice(55);
  }

  return address;
}

export const copyClipBoard = (value) => {
  if (!value) return toast.error("Something wrong!");

  let textarea = document.createElement("textarea");
  textarea.textContent = value;
  textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy"); // Security exception may be thrown by some browsers.
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    // return prompt("Copy to clipboard: Ctrl+C, Enter", text);
  } finally {
    document.body.removeChild(textarea);
  }

  toast.success("Copied!");
};

export const getCheckSumAddress = (address) => {
  if (!address) return null;
  try {
    return ethers.utils.getAddress(address);
  } catch (error) {
    return null;
  }
};

export function validateTelegramLink(link) {
  // Define a regular expression for a Telegram link
  const telegramRegex = /^(https?:\/\/)?(www\.)?t\.me\/[a-zA-Z0-9_]{5,32}\/?$/;

  // Test the link against the regular expression
  const isValid = telegramRegex.test(link);

  // Return the validation result
  return isValid;
}

export function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}

export function getPercentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

export function getGrowthPercentage(initialValue, currentValue) {
  initialValue = Number(initialValue);
  currentValue = Number(currentValue);
  return ((currentValue - initialValue) / initialValue) * 100;
}

export const sumArrayValue = (arr, key) => {
  const result = arr.reduce(function (acc, obj) {
    return Number(acc) + Number(obj[key]);
  }, 0);
  return result || 0;
};

export function formatValue(value) {
  if (!value) return 0;
  value = Number(value);
  if (value < 1000) {
    return Number(value).toFixed(0);
  }
  if (value >= 1000 && value < 100000) {
    return ` ${(value / 1000).toFixed(0)}K`;
  } else if (value >= 100000 && value < 1000000) {
    return ` ${(value / 1000).toFixed(0)}K`;
  } else if (value >= 1000000 && value <= 1000000000) {
    return ` ${(value / 1000000).toFixed(0)}M`;
  } else if (value >= 1000000000 && value < 1000000000000) {
    return ` ${(value / 1000000000).toFixed(0)}B`;
  } else {
    return Number(value).toFixed(0);
  }
}

export function hexStringToNumber(hexString) {
  return parseInt(hexString, 16);
}

export const calculateBonus = (amount) => {
  amount = Number(amount);
  if (amount >= 100 && amount < 500) {
    return 1; // 1%bonus
  } else if (amount >= 500 && amount < 2000) {
    return 2; //2% bonus
  } else if (amount >= 2000 && amount < 10000) {
    return 3; //3% bonus
  } else if (amount >= 10000 && amount < 20000) {
    return 5; //5% bonus
  } else if (amount >= 20000) {
    return 10; //10% bonus
  } else {
    return 0;
  }
};

export const convertWeiToEth = (value) => {
  if (!value) return 0;

  value = value.toString();

  return Number(ethers.utils.formatEther(value));
};

export function toFixed(a, b, precision) {
  if (toBigNumber(a).isZero() || toBigNumber(b).isZero()) {
    return "0";
  }
  return toBigNumber(a)
    .div(toBigNumber(b))
    .toFormat(precision ?? PRECISION);
}

export function formatUnits(a, decimals, precision) {
  if (!decimals) return "";
  return toFixed(a, toBigNumber(10).pow(decimals), precision);
}

export function toBigNumber(n) {
  return new BigNumber(n.toString());
}

export function toFixedCustm(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x?.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString()?.substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
}
export function truncateToFixed(value, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.floor(value * factor) / factor;
}



export const makeByteData = (data) => {

  const incentiveKeyAbi =
    "tuple(address rewardToken, address pool, uint256 startTime, uint256 endTime, address refundee)";
    let byteData = ethers.utils.defaultAbiCoder.encode([incentiveKeyAbi], [data])
    return byteData
};


export const makeByteDataForV3 = (data) => {

  const incentiveKeyAbi =
    "tuple(uint256 whatToDo,address targetToken,uint256 amountRemoveMin0,uint256 amountRemoveMin1,uint256 amountIn0,uint256 amountOut0Min,bytes swapData0, uint256 amountIn1,uint256 amountOut1Min,bytes swapData1,uint128 feeAmount0,uint128 feeAmount1,uint24 fee,int24 tickLower,int24 tickUpper,uint128 liquidity,uint256 amountAddMin0,uint256 amountAddMin1,uint256 deadline,address recipient,address recipientNFT,bool unwrap,bytes returnData,bytes swapAndMintReturnData)";
    let byteData = ethers.utils.defaultAbiCoder.encode([incentiveKeyAbi], [data])
    return byteData
};


export function toCommas(value) {
  let parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export function shortenTokenString(input) {
  if (input?.length <= 8) return input;
  return `${input?.substring(0, 8)}`;
}