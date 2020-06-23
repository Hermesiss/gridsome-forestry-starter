---
date: 2020-01-06
title: UPM registry
subtitle: Unity packages storage
thumbnail: "/uploads/upm/thumb.jpg"
categories:
- unity

---
You can use [custom npm registries](https://docs.unity3d.com/Manual/upm-scoped.html) in Unity

# Trismegistus upm registry

Public registry made using [Verdaccio](https://verdaccio.org/) with uplink to [OpenUpm](https://openupm.com/)

Add this to `Packages/manifest.json`:
```cs
{
  "scopedRegistries": [
    {
      "name": "trismegistus",
      "url": "http://upm.trismegistus.tech:4873/",
      "scopes": [
        "trismegistus.unity"
      ]
    }
  ]
}
```

Then you can browse packages in `Window > Package Manager`

For more info: <http://upm.trismegistus.tech:4873/>