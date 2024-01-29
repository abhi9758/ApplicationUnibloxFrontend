import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from 'src/services/cart.service';
import { of } from 'rxjs';
import { Item } from '../model/item.model';
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartServiceSpy: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CartService', ['getCart', 'addItemToCart']);

    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{ provide: CartService, useValue: spy }],
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartServiceSpy = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cart on initialization', () => {
    const mockCart = { items: [{ name: 'Item 1', price: 19.99 }, { name: 'Item 2', price: 29.99 }] };
    cartServiceSpy.getCart.and.returnValue(of(mockCart));

    fixture.detectChanges();

    expect(cartServiceSpy.getCart).toHaveBeenCalled();
    expect(component.cart).toEqual(mockCart);
  });

  it('should add item to cart and update cart display', () => {
    const mockItem: Item = { name: 'Item 3', price: 39.99 };
    cartServiceSpy.addItemToCart.and.returnValue(of(undefined));
    spyOn(component, 'getCart');

    //component.addItemToCart(mockItem);

    expect(cartServiceSpy.addItemToCart).toHaveBeenCalledWith(mockItem);
    expect(component.getCart).toHaveBeenCalled();
  });

  it('should return true when cart is not empty', () => {
    const mockItem: Item = { name: 'Item 1', price: 19.99 };
    component.cart = mockItem;

    const result = component.isCartNotEmpty();

    expect(result).toBeTrue();
  });

  it('should return false when cart is empty', () => {
    const mockCart = { items: [] };
    component.cart = mockCart;

    const result = component.isCartNotEmpty();

    expect(result).toBeFalse();
  });

  it('should generate a random small round image URL', () => {
    spyOn(Math, 'random').and.returnValue(0.5);

    const result = component.getRandomSmallRoundImage();

    expect(result).toContain('sig=2');
  });

  it('should update quantity when adding the same item to cart', () => {
    const existingItem = { name: 'Item 1', price: 19.99, quantity: 2 };
    const mockCart = { items: [existingItem] };
    const newItem = { name: 'Item 1', price: 19.99 };

    cartServiceSpy.getCart.and.returnValue(of(mockCart));
    cartServiceSpy.addItemToCart.and.returnValue(of(undefined));
    spyOn(component, 'getCart');

   // component.addItemToCart(newItem);

    expect(cartServiceSpy.addItemToCart).toHaveBeenCalledWith(newItem);
    expect(component.getCart).toHaveBeenCalled();
    expect(component.cart.items[0].quantity).toBe(3); // Updated quantity
  });

  // Add more tests as needed based on your component functionality

});
