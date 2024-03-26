<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Symfony\Component\HttpFoundation\Request;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        $user = $request->user();
        $sort = $request->sort;
        $order = $request->order;
        $limit = $request->limit;

        $products = Product::where('user_id', $user->id)
            ->orderBy($sort ?? 'created_at', $order ?? 'desc')
            ->paginate($limit);
        return ProductCollection::collection($products);
    }

    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
    }
}
