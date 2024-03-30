export APP_MODULE=node_modules
export GOBSWAP_PACKAGES=../gobswap-packages
echo "Rebuilding $APP_MODULE"

rm -rf $APP_MODULE/@uniswap/sdk-core
rm -rf $APP_MODULE/@uniswap/universal-router-sdk
rm -rf $APP_MODULE/@uniswap/smart-order-router

mkdir -p $APP_MODULE/@uniswap/sdk-core
cp $GOBSWAP_PACKAGES/packages/sdk-core/package.json $APP_MODULE/@uniswap/sdk-core
cp -R $GOBSWAP_PACKAGES/packages/sdk-core/dist $APP_MODULE/@uniswap/sdk-core/dist

mkdir -p $APP_MODULE/@uniswap/universal-router-sdk
cp $GOBSWAP_PACKAGES/packages/universal-router-sdk/package.json $APP_MODULE/@uniswap/universal-router-sdk
cp -R $GOBSWAP_PACKAGES/packages/universal-router-sdk/dist $APP_MODULE/@uniswap/universal-router-sdk/dist

mkdir -p $APP_MODULE/@uniswap/smart-order-router
cp $GOBSWAP_PACKAGES/packages/smart-order-router/package.json $APP_MODULE/@uniswap/smart-order-router
cp -R $GOBSWAP_PACKAGES/packages/smart-order-router/build $APP_MODULE/@uniswap/smart-order-router/build
