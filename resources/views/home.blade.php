<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Bocket</title>

    <!-- Fonts -->


    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <style>
        body {
            font-size: 14px;
        }

        .container {
            width: 100%;
        }

        #all-bookmarks {
            height: 600px;
            overflow: scroll;
        }

        #all-tags {
            height: 300px;
            overflow: scroll;
        }
    </style>
    
</head>
<body>
    <h2>Bocket - A Better Pocket Application</h2>
    <h3>Here are your Bookmarks</h3>
    <div id="content"></div>
    <!-- JavaScripts (moving all but bundle.js) -->
    <script src="{{ asset('js/bundle.js') }}"></script>

</body>
</html>