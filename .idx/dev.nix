# Nix configuration file for setting up the development environment
# For more information on customizing IDX environments, visit:
# https://developers.google.com/idx/guides/customize-idx-env
# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{pkgs}: {
  # Which nixpkgs channel to use.
  # Specify the nixpkgs channel version (stable or unstable).
  channel = "stable-24.05"; # or "unstable"

  # List of packages to be included in the environment.
  # Use https://search.nixos.org/packages to find packages.
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
    pkgs.nodePackages.pnpm
    pkgs.bun
  ];
  # Sets environment variables in the workspace.
  # Define environment variables (currently empty, can be customized).
  
  idx = {
    # Extensions to be added to the environment.
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id".
    extensions = [
      # "vscodevim.vim"
    ];

    # Workspace-specific settings
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file.
      # Commands to run when a workspace is created for the first time.
      onCreate = {
        # Install dependencies without audit, optimizing for offline use.
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";

        # List of files to open by default, if they exist in the workspace.
        # Open editors for the following files by default, if they exist:
        default.openFiles = [
          # Cover all the variations of language, src-dir, router (app/pages).
          "pages/index.tsx" "pages/index.jsx"
          "src/pages/index.tsx" "src/pages/index.jsx"
          "app/page.tsx" "app/page.jsx"
          "src/app/page.tsx" "src/app/page.jsx"
        ];
      };

      # Define actions when the workspace is started or restarted (onStart hook)
      # You can add commands here if needed.
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };

    # Enable and configure previews (e.g., web applications)
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          # Command to start the web server for previews
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web"; # Define which manager to use for the preview.
        };
      };
    };
  };
}