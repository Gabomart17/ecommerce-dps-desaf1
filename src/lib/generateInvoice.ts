import jsPDF from "jspdf";
import { Product } from "@/types/product";

interface InvoiceData {
    items: Product[];
    total: number;
    customerName: string;
    customerEmail: string;
}

export function generateInvoicePDF({ items, total, customerName, customerEmail }: InvoiceData) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(0, 150, 170);
    doc.text("GamingStore - Factura", 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Cliente: ${customerName}`, 14, 30);
    doc.text(`Correo: ${customerEmail}`, 14, 36);
    doc.text(`Fecha: ${new Date().toLocaleDateString("es-SV")}`, 14, 42);

    let y = 55;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Producto", 14, y);
    doc.text("Cant.", 120, y);
    doc.text("Precio", 145, y);
    doc.text("Subtotal", 170, y);
    y += 4;
    doc.line(14, y, 196, y);
    y += 8;

items.forEach((item) => {
    doc.setFontSize(9);
    doc.text(item.title.substring(0, 45), 14, y);
    doc.text(String(item.quantity), 122, y);
    doc.text(`$${item.price.toFixed(2)}`, 145, y);
    doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 170, y);
    y += 7;
});

y += 5;
doc.line(14, y, 196, y);
y += 10;
doc.setFontSize(13);
doc.setTextColor(0, 150, 170);
doc.text(`Total: $${total.toFixed(2)}`, 145, y);

doc.save(`factura-${Date.now()}.pdf`);
}