frappe.ui.form.on('Client', {
    onload: function(frm) {
        const token = window.DADATA_TOKEN;

        function initDadata(inputFieldname) {
            const input = frm.fields_dict[inputFieldname].$wrapper.find('input');

            input.suggestions({
                token: token,
                type: "PARTY",
                onSelect: function(suggestion) {
                    const data = suggestion.data;

                    frm.set_value('name1', suggestion.value || '');
                    frm.set_value('inn', data.inn || '');
                    frm.set_value('kpp', data.kpp || '');
                }
            });
        }
				
        setTimeout(() => {
            initDadata("name1");
            initDadata("inn");
        }, 300);
    },

    refresh: function(frm) {				
        frm.add_custom_button('Получить адрес', function() {
            if (!frm.doc.inn) {
                frappe.msgprint('Сначала заполните поле ИНН.');
                return;
            }

            frappe.call({
                method: 'clients_app.api.client.get_address_by_inn',
                args: { inn: frm.doc.inn },
                callback: function(r) {
                    if (r.message) {
                        frm.set_value('address', r.message.address || '');

                        frappe.msgprint(__('Адрес успешно получен: ' + r.message.address));
                        frappe.show_alert({
                            message: __('Адрес получен: ' + r.message.address),
                            indicator: 'green'
                        }, 5);
                    } else {
                        frappe.msgprint(__('Не удалось получить адрес.'));
                    }
                }
            });
        });
    }
});
