import frappe
import requests

@frappe.whitelist()
def get_address_by_inn(inn):
    token = frappe.conf.get("dadata_api_key")

    if not token:
        frappe.throw("Dadata API ключ не настроен в site_config.json")

    url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party"
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Token {token}"
    }
    data = {
        "query": inn
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        suggestions = response.json().get("suggestions", [])
        if suggestions:
            company = suggestions[0]['data']
            return { "address": company.get('address', {}).get('value') or "" }

    frappe.throw("Не удалось получить адрес по ИНН.")
