export type ProductNavigationsProps = {
  id?: string;
}

export type OrderNavigationsProps = {
  id: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamsList {
      home: undefined;
      product: ProductNavigationsProps;
      order: OrderNavigationsProps;
      orders: undefined;
    }
  }
}