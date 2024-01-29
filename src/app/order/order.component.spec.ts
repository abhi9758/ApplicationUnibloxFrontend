import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { OrderService } from 'src/services/order.service';
import { of } from 'rxjs';
import { Order } from '../model/order.models';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let orderServiceSpy: jasmine.SpyObj<OrderService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('OrderService', ['getOrders', 'getDiscountCodes', 'checkout']);

    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      providers: [{ provide: OrderService, useValue: spy }],
    });

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    orderServiceSpy = TestBed.inject(OrderService) as jasmine.SpyObj<OrderService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch orders on initialization', () => {
    const mockOrders: Order[] = [
      {
        items: ['Item 1', 'Item 2'],
        totalAmount: 50,
        discountCode: 'DISCOUNT123',
        discountAmount: 10
      },
      // Add more orders as needed
    ];
    orderServiceSpy.getOrders.and.returnValue(of(mockOrders));

    fixture.detectChanges();

    expect(orderServiceSpy.getOrders).toHaveBeenCalled();
    expect(component.orders).toEqual(mockOrders);
    expect(component.pagedOrders).toEqual(mockOrders.slice(0, component.pageSize));
  });

  it('should fetch discount codes on initialization', () => {
    const mockDiscountCodes: string[] = ['CODE1', 'CODE2'];
    orderServiceSpy.getDiscountCodes.and.returnValue(of(mockDiscountCodes));

    fixture.detectChanges();

    expect(orderServiceSpy.getDiscountCodes).toHaveBeenCalled();
    expect(component.discountCodes).toEqual(mockDiscountCodes);
  });

  it('should update paged orders when page changes', () => {
    const mockOrders: Order[] = [
      {
        items: ['Item 1', 'Item 2'],
        totalAmount: 50,
        discountCode: 'DISCOUNT123',
        discountAmount: 10
      },
      // Add more orders as needed
    ];
    component.orders = mockOrders;

    const event = { pageIndex: 1 }; // Simulate changing to page 2
    component.onPageChange(event);

    expect(component.pagedOrders).toEqual(mockOrders.slice(component.pageSize, component.pageSize * 2));
  });

  it('should checkout and refresh orders and discount codes', () => {
    const mockOrders: Order[] = [
      {
        items: ['Item 1', 'Item 2'],
        totalAmount: 50,
        discountCode: 'DISCOUNT123',
        discountAmount: 10
      },
      // Add more orders as needed
    ];
    const mockDiscountCodes: string[] = ['CODE1', 'CODE2'];
    orderServiceSpy.getOrders.and.returnValue(of(mockOrders));
    orderServiceSpy.getDiscountCodes.and.returnValue(of(mockDiscountCodes));

    component.checkout();

    expect(orderServiceSpy.checkout).toHaveBeenCalled();
    expect(orderServiceSpy.getOrders).toHaveBeenCalled();
    expect(orderServiceSpy.getDiscountCodes).toHaveBeenCalled();
    expect(component.orders).toEqual(mockOrders);
    expect(component.discountCodes).toEqual(mockDiscountCodes);
  });

  it('should return true when orders are not empty', () => {
    const mockOrders: Order[] = [
      {
        items: ['Item 1', 'Item 2'],
        totalAmount: 50,
        discountCode: 'DISCOUNT123',
        discountAmount: 10
      },
      // Add more orders as needed
    ];
    component.orders = mockOrders;

    const result = component.isOrdersNotEmpty();

    expect(result).toBeTrue();
  });

  it('should return false when orders are empty', () => {
    const mockOrders: Order[] = [];
    component.orders = mockOrders;

    const result = component.isOrdersNotEmpty();

    expect(result).toBeFalse();
  });

  // Add more tests as needed based on your component functionality

});
