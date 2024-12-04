


export const loadWalletTokenIds = async (walletAddress, web3) => {
    let tokens = [];

    for (let i = 0; i < 1000; i++) {
        try {
            let tokenId = await web3.getTokenId(walletAddress, i);

            let tokenLiquidity = await web3.getTokenLiquidity(tokenId);

            if (tokenLiquidity > 0) {
                let tokenURI = await web3.getTokenURI(tokenId);
                let base64String = tokenURI.replace(
                    /^data:application\/json;base64,/,
                    ""
                );

                const decodedStr = Buffer.from(base64String, "base64").toString(
                    "utf-8"
                );
                const decodedData = JSON.parse(decodedStr);
                tokens.push({
                    ...decodedData,
                    value: tokenId,
                    label: decodedData.name + ` (#${tokenId})`,
                });
            }
        } catch (error) {
            console.log(error, "<====error in loadWalletTokenIds");

            break;
        }
    }

    return tokens;
};


export const loadContractTokenIds = async ( walletAddress, web3) => {
    let tokens = [];
  
    for (let i = 0; i < 10000; i++) {
        try {
            let tokenId = await web3.getTokenId(
                web3.contractDetails.contractAddress,
                i
            );
            let desposit = await web3.getDeposit(tokenId);

            if (desposit.owner == walletAddress) {
                let tokenLiquidity = await web3.getTokenLiquidity(tokenId);
                if (tokenLiquidity > 0) {
                    let tokenURI = await web3.getTokenURI(tokenId);

                    let base64String = tokenURI.replace(
                        /^data:application\/json;base64,/,
                        ""
                    );

                    const decodedStr = Buffer.from(base64String, "base64").toString(
                        "utf-8"
                    );
                    const decodedData = JSON.parse(decodedStr);
                    tokens.push({
                        ...decodedData,
                        value: tokenId,
                        label: decodedData.name + ` (#${tokenId})`,
                    });
                }
            }
        } catch (error) {
            break;
        }
    }

    return tokens;
};


export const loadWithdrawTokenIds = async ( walletAddress, web3) => {
    let tokens = [];

    for (let i = 0; i < 10000; i++) {
        try {
            let tokenId = await web3.getTokenId(
                web3.contractDetails.contractAddress,
                i
            );
            let desposit = await web3.getDeposit(tokenId);

            if (desposit.numberOfStakes == 0 && desposit.owner == walletAddress) {
                let tokenLiquidity = await web3.getTokenLiquidity(tokenId);

                if (tokenLiquidity > 0) {
                    let tokenURI = await web3.getTokenURI(tokenId);

                    let base64String = tokenURI.replace(
                        /^data:application\/json;base64,/,
                        ""
                    );

                    const decodedStr = Buffer.from(base64String, "base64").toString(
                        "utf-8"
                    );
                    const decodedData = JSON.parse(decodedStr);
                    tokens.push({
                        ...decodedData,
                        value: tokenId,
                        label: decodedData.name + ` (#${tokenId})`,
                    });
                }
            }
        } catch (error) {
            break;
        }
    }

    return tokens;
};

export const loadStakeTokenIds = async ( walletAddress, web3) => {
    let tokens = [];

    for (let i = 0; i < 10000; i++) {
        try {
            let tokenId = await web3.getTokenId(
                web3.contractDetails.contractAddress,
                i
            );
            let desposit = await web3.getDeposit(tokenId);

            if (desposit.numberOfStakes > 0 && desposit.owner == walletAddress) {
                let tokenLiquidity = await web3.getTokenLiquidity(tokenId);
                if (tokenLiquidity > 0) {
                    let tokenURI = await web3.getTokenURI(tokenId);

                    let base64String = tokenURI.replace(
                        /^data:application\/json;base64,/,
                        ""
                    );

                    const decodedStr = Buffer.from(base64String, "base64").toString(
                        "utf-8"
                    );
                    const decodedData = JSON.parse(decodedStr);
                    tokens.push({
                        ...decodedData,
                        value: tokenId,
                        label: decodedData.name + ` (#${tokenId})`,
                    });
                }
            }
        } catch (error) {
            break;
        }
    }

    return tokens;
};
