import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProductLoadingStatus, loadProductList } from "../../store/products";

export function AppLoader(Component) {
  return function AppLoader(props) {
    // Add your authentication logic here
    // For example, check if the user is authenticated
    const dispatch = useAppDispatch();
    const productStatusLoading = useAppSelector(getProductLoadingStatus());

    useEffect(() => {
      dispatch(loadProductList());
    }, []);

    if (productStatusLoading) {
      return (
        <div className="w-full h-screen">
          <p className="flex justify-center">Loading...</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
