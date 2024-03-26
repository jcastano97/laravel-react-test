<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->transform(function (Product $product) {
                return new ProductResource($product);
            }),
            'meta' => [
                'total_products' => $this->collection->count(),
            ],
        ];
    }
}
