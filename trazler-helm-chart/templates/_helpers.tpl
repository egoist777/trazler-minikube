{{- define "ingress-annotations" -}}
   kubernetes.io/rewrite-target: /$1
{{- end -}}